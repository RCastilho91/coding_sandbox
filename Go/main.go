package main

import (
	"fmt"
	"math/rand"
	"time"
)

/*Game structures the game with a deck of playing cards
 */
type Game struct {
	Deck []Card
}

/*Card defines a game card as being composed by a name and a suit
 */
type Card struct {
	Name string
	Suit string
}

/*Deck declares it is an array of cards
 */
type Deck []Card

func init() {
	rand.Seed(time.Now().UnixNano())
}

/*GenerateDeck merges two lists together to create the deck of cards
* it iterates through a list of suits and appends it along with the card names
* ultimately returning a full deck
 */
func GenerateDeck() (deck Deck) {

	cardNames := []string{"2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"}
	cardSuits := []string{"♦", "♣", "♥", "♠"}

	for i := 0; i < len(cardSuits); i++ {
		for j := 0; j < len(cardNames); j++ {
			card := Card{
				Name: cardNames[j],
				Suit: cardSuits[i],
			}

			deck = append(deck, card)
		}
	}

	return
}

func getDeckIndex(minValue int, maxValue int) int {
	deckIndex := minValue + rand.Intn(maxValue-minValue)

	return deckIndex
}

func shuffleDeck(deck Deck) {
	rand.Shuffle(len(deck), func(i, j int) {
		deck[i], deck[j] = deck[j], deck[i]
	})

	fmt.Println(deck)
}

func dealCards(deck Deck, players int, cardsByHand int) {
	for i := 0; i < players; i++ {

		playerHand := make([]Card, 0)

		for j := 0; j < cardsByHand; j++ {
			deckIndex := getDeckIndex(0, 52)
			randomCard := deck[deckIndex]
			playerHand = append(playerHand, randomCard)
		}

		fmt.Print(playerHand)
	}
}

func main() {
	deck := GenerateDeck()
	shuffleDeck(deck)
	dealCards(deck, 3, 2)
}
