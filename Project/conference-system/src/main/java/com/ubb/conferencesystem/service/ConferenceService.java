package com.ubb.conferencesystem.service;

import com.ubb.conferencesystem.model.Conference;
import com.ubb.conferencesystem.repository.ConferenceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConferenceService {

    @Autowired
    ConferenceRepository repository;

    public List<Conference> findAll(){
        return this.repository.findAll();
    }
}
