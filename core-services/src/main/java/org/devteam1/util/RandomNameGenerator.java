package org.devteam1.util;
import java.util.Random;

public class RandomNameGenerator {
    public static final String[] ADJ = {
            "Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Pink", "Black", "Brown", "White", "Cyan", "Seaform Green", "Sage"
    };

    public static final String[] NOUN = {
            "Lion", "Elephant", "Dolphin", "Tiger", "Giraffe", "Eagle", "Parrot", "Penguin", "Owl", "Flamingo", "Crocodile", "Iguana", "Snake", "Tortoise", "Chameleon", "Frog", "Salamander", "Newt", "Toad", "Axolotl", "Salmon", "Goldfish", "Shark", "Clownfish", "Betta", "Butterfly", "Ant", "Dragonfly", "Beetle", "Bee", "Javan Leopard", "Javan Gibbon", "Sunda Pangolin", "Sumatran Elephant", "Banteng", "Javan Hawk-Eagle", "Bali Myna", "Javanese Pheasant", "White-throated Kingfisher", "Black-naped Oriole", "Javan Monitor Lizard", "Green Tree Python", "Java Blue Flying Dragon", "Borneo and Java Tortoise", "Java Frog", "Banded Bullfrog", "Common Javanese Toad", "Giant Snakehead", "Atlas Moth", "Common Mormon Butterfly", "Leafcutter Ant"

    };

    public static String create() {
        final Random rand = new Random();
        final String adj = ADJ[rand.nextInt(ADJ.length)];
        final String noun = NOUN[rand.nextInt(NOUN.length)];
        return adj + " " + noun;
    }

}
