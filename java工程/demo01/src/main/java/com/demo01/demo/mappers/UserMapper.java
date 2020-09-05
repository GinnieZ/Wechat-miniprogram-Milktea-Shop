package com.demo01.demo.mappers;

import com.demo01.demo.entity.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserMapper {

    public User login(User user);
    public User findByPhone(String phone);
    public int changeUser(User user);
    public int changePwd(User user);
    public int logon(User user);
}
