package org.devteam1.util;
import java.util.Random;

public class RandomNameGenerator {
    public static String[] ADJ = {
            "Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Pink", "Black", "Brown", "White"
    };

    public static String[] NOUN = {
            "Elephant", "Lion", "Tiger", "Dolphin", "Gorilla", "Kangaroo", "Bear", "Giraffe", "Zebra", "Rabbit"

    };

    public static String create() {
        Random rand = new Random();
        String adj = ADJ[rand.nextInt(ADJ.length)];
        String noun = NOUN[rand.nextInt(NOUN.length)];
        return adj + " " + noun;
    }

}
