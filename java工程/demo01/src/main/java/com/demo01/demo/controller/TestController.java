//package com.demo01.demo.controller;
//
//import com.demo01.demo.entity.User;
//import com.demo01.demo.mappers.UserMapper;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.util.ArrayList;
//import java.util.List;
//
////控制器
////返回数据使用@RestController
//@RestController
//public class TestController {
//    //自动装配 对象的注入
//    //mapper注入当前类
//    @Autowired
//    UserMapper userMapper;
//
//
//
//    //一个方法对应一个请求
//
//    //当用户发送一个请求A时，做test01的方法
//    //无参函数
//    @RequestMapping("A")
//    public String test01(){
//        String tmp="lalala";
//        return tmp;
//    }
//    //有参函数
//    @RequestMapping("test02")
//    public String test02(String userName){
//        if("hq".equals(userName))
//        {
//            return "验证成功";
//        }
//        return "验证失败";
//    }
//    //返回对象
//    @RequestMapping("test03")
//    public User test03(String userName){
//        //atl+回车 导包
//        User user=new User();
//        user.setuserName(userName+"666");
//        user.setPwd("123");
//        return user;
//    }
//    @RequestMapping("test04")
//    public String test04(String userName,String pwd){
//        System.out.println(userName);
//        System.out.println(pwd);
//        if("hq".equals(userName)&&"123".equals(pwd))
//        {
//            return "验证成功";
//        }
//        return "验证失败";
//    }
//
//    @RequestMapping("test05")
//    public String test05(User user){
//        System.out.println(user.getuserName());
//        System.out.println(user.getPwd());
//        if("hq".equals(user.getuserName())&&"123".equals(user.getPwd()))
//        {
//            return "验证成功";
//        }
//        return "验证失败";
//    }
//
//    //请求数据是对象，响应数据是多个对象
//    @RequestMapping("test06")
//    public List<User> test06(User user){
////        System.out.println(user.getuserName());
////        System.out.println(user.getPwd());
////        if("hq".equals(user.getuserName())&&"123".equals(user.getPwd()))
////        {
////            return "验证成功";
////        }
////        return "验证失败";
//        //创建集合
//        List<User> userList = new ArrayList<>();
//        userList.add(new User("aa","11"));
//        userList.add(new User("bb","22"));
//        userList.add(new User("cc","33"));
//        return userList;
//    }
//
//    @RequestMapping("testM01")
//    public String testM01(){
//        //调用mapper层的方法
//        String pwd=userMapper.findByName();
//        return pwd;
//    }
//    @RequestMapping("testLog")
//    public String testLog(String userName,String pwd){
//        System.out.println(userName);
//        System.out.println(pwd);
//        //调用mapper层的方法
//        String pwdTmp=userMapper.findByName2(userName);
//        if(pwd.equals(pwdTmp))
//            return "success";
//        else
//            return "failed";
//    }
//
//    @RequestMapping("testM03")
//    public User testM03(User user){
//        User u=userMapper.findByName3(user);
//        return u;
//    }
//
//    @RequestMapping("testM04")
//    public List<User> testM04(){
//
//        List<User> uList=userMapper.findAll();
//
//        return uList;
//    }
//
//    @RequestMapping("testM05")
//    public List<User> testM05(String userName){
//        List<User> uList=userMapper.findByName4(userName);
//        System.out.println(uList.size());
//        return uList;
//    }
//
//    @RequestMapping("testAdd")
//    public String testAdd(User user){
//        System.out.println(user.getuserName());
//        System.out.println(user.getPwd());
//       if(userMapper.addOne(user)==0)
//           return "failed";
//       return "success";
//    }
//
//
//
//
//}
