package com.demo01.demo.service;

import com.demo01.demo.entity.Milktea;

import java.util.List;

public interface MilkteaService {
    List<Milktea> recommend();

    Milktea selectOneMilktea(String id);

    List<Milktea> selectAllMilktea();

    List<Milktea> selectByType(String type);

    int countMilktea();

    int countType();
}
