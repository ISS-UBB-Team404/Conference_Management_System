package com.ubb.conferencesystem.model;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
@Entity
public class Proposal extends Paper{

    @OneToOne
    @JoinColumn(name = "author_id", referencedColumnName = "id")
    private Author authorId;

    public Proposal(String title, String content, Author authorId) {
        super(title, content);
        this.authorId = authorId;
    }
}
