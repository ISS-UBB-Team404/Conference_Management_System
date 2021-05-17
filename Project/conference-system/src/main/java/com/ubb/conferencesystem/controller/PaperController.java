package com.ubb.conferencesystem.controller;

import com.ubb.conferencesystem.model.Author;
import com.ubb.conferencesystem.model.Conference;
import com.ubb.conferencesystem.model.Listener;
import com.ubb.conferencesystem.model.Paper;
import com.ubb.conferencesystem.service.PaperService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
public class PaperController {

    @Autowired
    private PaperService service;

    @RequestMapping(path = "/submit-paper")
    @CrossOrigin(origins = "http://localhost:4200")
    public Paper submitPaper(@RequestBody Map<String, Object> data) throws Exception{
        Paper paper = (Paper)(data.get("paper"));
        String title = paper.getTitle();
        Long conferenceId = Long.valueOf((Integer) data.get("conferenceId"));

        Paper paperFetched = null;
        if (title != null && !title.equals("")) {
            paperFetched = service.fetchPaperByTitle(title);
            if (paperFetched != null) {
                throw new Exception("Paper with " + title + " already exists!");
            }
        }
        if(paper.getAccepted() == null)
            paper.setAccepted(false);
        return service.savePaper(paper);
    }

}
