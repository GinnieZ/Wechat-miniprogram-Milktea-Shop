package com.demo01.demo.service;

import com.demo01.demo.entity.User;
import com.demo01.demo.mappers.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserMapper userMapper;

    @Override
    public String login(User user) {
        if(user.getPhone().equals("")){
            System.out.println("手机号是空的，无法登陆");
            return "";
        }
       User successUser=userMapper.login(user);
        if(null==successUser){
            return "";
        }
       return successUser.getPhone();
    }

    @Override
    public User findByPhone(String phone) {
        if(phone.equals("")){
            System.out.println("手机号是空的，无法查找");
            User user = new User();
            return user;
        }
        User successUser=userMapper.findByPhone(phone);
        return successUser;
    }

    @Override
    public String findByPhoneAndPwd(User user) {
        System.out.println(user.getPhone());
        if(user.getPhone().equals("")){
            return "未登录";
        }
        User successuser=userMapper.login(user);
        if(null!=successuser){
            return "";
        }
        return "原始密码输入错误，请检查";
    }

    @Override
    public String changeUser(User user) {
//        调用 mapper中的方法
        User beforeUser = userMapper.findByPhone(user.getPhone());
        if(beforeUser==null){
            return "您尚未登录，请先登录";
        }
        if(beforeUser.getGender().equals(user.getGender()) && beforeUser.getBirthday().equals(user.getBirthday())
                && beforeUser.getUsername().equals(user.getUsername())){
            return "修改信息无变化";
        }
        else{
            int count=userMapper.changeUser(user);
            if(count==0){
                return "修改失败，请稍后修改";
            }
            return "修改成功";
        }
    }

    @Override
    public String logon(User user) {
        if(user.getPhone().length()!=11){
            return "此手机号有误，注册失败";
        }
        if(userMapper.findByPhone(user.getPhone())!=null){
            return "此手机号已注册，注册失败";
        }
        user.setUsername("默认");
        user.setLevel(5);
        user.setGender("女");
        user.setBirthday("2020/09/05");
        int number = userMapper.logon(user);
        if(number>0){
            return "";
        }
        return "注册失败";
    }

    @Override
    public String changePwd(User user) {
        int count=userMapper.changePwd(user);
        if(count!=0){
            return "";
        }
        return "修改失败，请稍后重试";
    }
}
