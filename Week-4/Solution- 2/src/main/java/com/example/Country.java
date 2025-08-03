package com.example;

public class Country {
    private String name;

    public Country() {}

    public Country(String name) {
        this.name = name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void display() {
        System.out.println("Country name: " + name);
    }
}
