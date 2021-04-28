package com.ubb.conferencesystem.controller;

import com.ubb.conferencesystem.model.Conference;
import com.ubb.conferencesystem.service.ConferenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ConferenceController {

    @Autowired
    private ConferenceService conferenceService;

    @RequestMapping(value = "/chair")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Conference> getAllConferences(){
        return conferenceService.findAll();
    }
}
