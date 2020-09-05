package com.demo01.demo.mappers;

import com.demo01.demo.entity.Milktea;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MilkteaMapper {
//    num为推荐展示的奶茶数量
    List<Milktea> selectTop(int num);

//    根据id查找奶茶信息
    Milktea selectMilkteaById(String id);

//    查找全部奶茶信息
    List<Milktea> selectAll();

    List<Milktea> selectByType(String type);

    int countType();

    int countMilktea();
}
