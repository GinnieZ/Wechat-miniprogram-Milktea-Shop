package com.demo01.demo.entity;

import java.sql.Timestamp;
import java.util.List;

public class MiniOrder {
    private String userName;
    private List<String> drinkIdList;
    private Timestamp orderTime;
    private int orderId;
    private double totalPrice;

    public MiniOrder() {
    }

    public MiniOrder(String userName, List<String> drinkIdList, Timestamp orderTime, int orderId, double totalPrice) {
        this.userName = userName;
        this.drinkIdList = drinkIdList;
        this.orderTime = orderTime;
        this.orderId = orderId;
        this.totalPrice = totalPrice;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }


    public Timestamp getOrderTime() {
        return orderTime;
    }

    public void setOrderTime(Timestamp orderTime) {
        this.orderTime = orderTime;
    }

    public int getOrderId() {
        return orderId;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }

    public List<String> getDrinkIdList() {
        return drinkIdList;
    }

    public void setDrinkIdList(List<String> drinkIdList) {
        this.drinkIdList = drinkIdList;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }
}
