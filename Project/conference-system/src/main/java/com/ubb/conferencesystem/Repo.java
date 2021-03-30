package com.ubb.conferencesystem;

import com.ubb.conferencesystem.model.Paper;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Repo extends JpaRepository<Paper, Long> {
}
