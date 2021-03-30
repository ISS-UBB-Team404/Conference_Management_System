package com.ubb.conferencesystem.model;

import javax.persistence.Entity;

@Entity
public class Truck extends Vehicle{
    private Integer maxLoad;
    private Boolean sleepCab;

    public Truck() {
    }

    public Truck(String name, Integer seats, Integer maxLoad, Boolean sleepCab) {
        super(name, seats);
        this.maxLoad = maxLoad;
        this.sleepCab = sleepCab;
    }
}
