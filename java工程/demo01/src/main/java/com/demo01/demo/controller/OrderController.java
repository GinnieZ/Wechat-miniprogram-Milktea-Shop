package com.demo01.demo.controller;

import com.demo01.demo.entity.MiniOrder;
import com.demo01.demo.entity.MiniOrderEntry;
import com.demo01.demo.entity.Order;
import com.demo01.demo.entity.OrderEntry;
import com.demo01.demo.mappers.OrderMapper;
import com.demo01.demo.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;

@RestController
public class OrderController {
    @Autowired
    OrderService orderService;
    @Autowired
    OrderMapper orderMapper;

/*    @RequestMapping("testO1")
    public List<Order> testO1(){
        //调用mapper层的方法
        return orderService.findAllOrderByName("amy");
    }*/
    //查询用户所有订单详细信息
    @RequestMapping("findAllOrderByName")
    public List<Order> findAllOrderByName(String userName)
    {
        return orderService.findAllOrderByName(userName);
    }

    //查询用户今日订单缩略信息
    @RequestMapping("findTodayMiniOrder")
    public List<MiniOrder> findTodayMiniOrder(String userName)
    {
        return orderService.findTodayMiniOrder(userName);
    }
    //查询用户所有订单缩略信息
    @RequestMapping("findAllMiniOrder")
    public List<MiniOrder> findAllMiniOrder(String userName)
    {
        return orderService.findAllMiniOrder(userName);
    }

    //查询一个订单的详细信息
    @RequestMapping("findOneOrder")
    public Order findOneOrder(String userName,int orderId)
    {
        return orderService.findOneOrder(userName,orderId);
    }

    //////////test
    //查询用户所有订单
    @RequestMapping("test")
    public int test()
    {
        Timestamp time=new Timestamp(System.currentTimeMillis()); ;
        OrderEntry orderEntry = new OrderEntry();
        orderEntry.setUserName("bob");
        orderEntry.setDrinkId("0001");
        orderEntry.setDrinkInfo("全糖");
        orderEntry.setDrinkName("烤奶");
        orderEntry.setDrinkNum(1);
        orderEntry.setDrinkPrice(10);
        orderEntry.setOrderId(114);
        orderEntry.setOrderTime(time);
        orderEntry.setPickId(122);
        return orderMapper.addOneOrder(orderEntry);
    }

    //增加一个订单条目
    @RequestMapping("addOneOrder")
    public boolean addOneOrder(Order order)
    {
        return orderService.addOneOrder(order);
    }

    //增加一个订单条目
    @RequestMapping("addOneOrderByStr")
    public boolean addOneOrderByStr(String userName,String drinkStr)
    {

        return orderService.addOneOrderByStr(userName,drinkStr);
    }
//    @RequestMapping("testDate")
//    public static String testDate(String oldDateStr) {
//        DateFormat df = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");
//        Date date = df.parse(oldDateStr);
//        SimpleDateFormat df1 = new SimpleDateFormat ("EEE MMM dd HH:mm:ss Z yyyy", Locale.UK);
//        Date date1 =  df1.parse(date.toString());
//        DateFormat df2 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//        return df2.format(date1);
//    }
}
