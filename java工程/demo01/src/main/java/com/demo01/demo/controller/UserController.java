package com.demo01.demo.controller;

import com.demo01.demo.entity.User;
import com.demo01.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class UserController {

//  自动装配
    @Autowired
UserService userService;

//
//    @RequestMapping("change")
//    public boolean test01(User user){
//        boolean res= userService.changeOne(user);
//        return res;
//    }
//
    @RequestMapping("logon")
    public String logon(User user){
        String res= userService.logon(user);
        return res;
    }

    @RequestMapping("login")
    public String login(User user){
        String res= userService.login(user);
        return res;
    }

    @RequestMapping("findByPhone")
    public User findByPhone(String phone){
        User res= userService.findByPhone(phone);
        return res;
    }

    @RequestMapping("changeUser")
    public String changeUser(User user){
        String res= userService.changeUser(user);
        return res;
    }

    @RequestMapping("findByPhoneAndPwd")
    public String findByPhoneAndPwd(User user){
        String res= userService.findByPhoneAndPwd(user);
        return res;
    }

    @RequestMapping("changePwd")
    public String changePwd(User user){
        String res= userService.changePwd(user);
        return res;
    }
}
