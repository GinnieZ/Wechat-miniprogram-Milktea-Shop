package com.demo01.demo.controller;


import com.demo01.demo.entity.Milktea;
import com.demo01.demo.service.MilkteaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class MilkteaController {
    @Autowired
    MilkteaService milkteaService;

    @RequestMapping("recommend")
//    首页“为你推荐”
    public List<Milktea> recommend() {
        return milkteaService.recommend();
    }

    @RequestMapping("selectOneMilktea")
//    根据id返回对应的奶茶
    public Milktea selectOneMilktea(String id) {
        Milktea milktea = milkteaService.selectOneMilktea(id);
        return milktea;
    }

    @RequestMapping("selectAllMilktea")
//    返回全部奶茶
    public List<Milktea> selectAllMilktea() {
        List<Milktea> milkteas = milkteaService.selectAllMilktea();
        return milkteas;
    }

    @RequestMapping("selectByType")
//    返回对应分类的奶茶
    public List<Milktea> selectByType(String type) {
        List<Milktea> milkteas = milkteaService.selectByType(type);
        return milkteas;
    }

    @RequestMapping("selectAllByType")
//    返回对应分类的奶茶
    public List<List<Milktea>> selectAllByType(String type) {
        List<List<Milktea>> res= new ArrayList<List<Milktea>>();
        for (int i = 0; i < 4; i++) {
            List<Milktea> temp = selectByType(Integer.toString(i+1) );
            res.add(temp);
        }
        return res;
    }

    @RequestMapping("countType")
//    返回奶茶的种类数
    public int countType() {
        return milkteaService.countType();
    }

    @RequestMapping("countMilktea")
//    返回奶茶的种类数
    public int countMilktea() {
        return milkteaService.countMilktea();
    }
}
