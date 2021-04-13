package com.ubb.conferencesystem.controller;

import com.ubb.conferencesystem.model.Author;
import com.ubb.conferencesystem.model.Listener;
import com.ubb.conferencesystem.model.Paper;
import com.ubb.conferencesystem.service.PaperService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PaperController {

    @Autowired
    private PaperService service;

    @RequestMapping(path = "/submit-paper")
    public Paper submitPaper(@RequestBody Paper paper) throws Exception {
        String title = paper.getTitle();
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
