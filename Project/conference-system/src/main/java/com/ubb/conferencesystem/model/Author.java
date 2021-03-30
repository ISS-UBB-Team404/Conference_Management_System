package com.ubb.conferencesystem.model;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;

@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
@Entity
public class Author extends User{

    public Author(String username, String password, String email) {
        super(username, password, email);
    }

}
