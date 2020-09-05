package com.demo01.demo.service;

import com.demo01.demo.entity.MiniOrder;
import com.demo01.demo.entity.Order;
import com.demo01.demo.entity.OrderEntry;

import java.util.List;

public interface OrderService {
    public List<Order> findAllOrderByName(String userName);
    public List<MiniOrder> findAllMiniOrder(String userName);
    public List<MiniOrder> findTodayMiniOrder(String userName);
    public Order findOneOrder(String userName, int orderId);
    public boolean addOneOrder(Order order);
    public boolean addOneOrderByStr(String userName,String drinkStr);
}
