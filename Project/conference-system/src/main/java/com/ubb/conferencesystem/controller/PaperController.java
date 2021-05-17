package com.ubb.conferencesystem.controller;

import com.ubb.conferencesystem.model.Paper;
import com.ubb.conferencesystem.service.AuthorService;
import com.ubb.conferencesystem.service.PaperService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class PaperController {

    @Autowired
    private PaperService paperService;

    @Autowired
    private AuthorService authorService;

    @RequestMapping(path = "/submit-paper/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public Paper submitPaper(@PathVariable Long id , @RequestBody Paper paper) throws Exception {
        String title = paper.getTitle();
        Paper paperFetched = null;
        if (title != null && !title.equals("")) {
            paperFetched = paperService.fetchPaperByTitle(title);
            if (paperFetched != null) {
                throw new Exception("Paper with " + title + " already exists!");
            }
        }
        if(paper.getAccepted() == null)
            paper.setAccepted(false);
        paper.setAuthor(authorService.fetchAuthorById(id));

        return paperService.savePaper(paper);
    }

}
