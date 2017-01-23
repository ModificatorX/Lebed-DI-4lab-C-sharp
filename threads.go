package main

import (
	"fmt"
	"time"
)

type Rebel struct {
	data      string
	recipient int
}

func initial(ch chan Rebel, rebel Rebel) {
	fmt.Println("initial thread")
	ch <- rebel
}

func thread(ch chan Rebel, num int) {
	fmt.Println("thread", num) 
	token := <-ch
	if token.recipient == num {
		fmt.Println(rebel.data, "received")
	} else {
		ch <- token
	}
}

func main() {
	n := 6
	rebel := Rebel{"data", n}
	ch := make(chan Rebel)
	go initial(ch, rebel)
	for i := 1; i <= n; i++ {
		go thread(ch, i)
	}
	time.Sleep(time.Second)
}