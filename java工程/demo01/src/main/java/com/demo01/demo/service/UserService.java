package com.demo01.demo.service;

import com.demo01.demo.entity.User;


import java.util.List;

public interface UserService {
//    登录
    public String login(User user);
//    按电话号搜索
    public User findByPhone(String phone);
    public String findByPhoneAndPwd(User user);
//    修改个人信息
    public String changeUser(User user);
    public String logon(User user);
    public String changePwd(User user);
}
