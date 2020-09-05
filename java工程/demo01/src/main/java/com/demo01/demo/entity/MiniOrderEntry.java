package com.demo01.demo.entity;

import java.sql.Timestamp;

public class MiniOrderEntry {
    private String userName;
    private String drinkId;
    private Timestamp orderTime;
    private int orderId;
    private double drinkPrice;
    private int drinkNum;

    public MiniOrderEntry() {
    }

    public MiniOrderEntry(String userName, String drinkId, Timestamp orderTime, int orderId, double drinkPrice, int drinkNum) {
        this.userName = userName;
        this.drinkId = drinkId;
        this.orderTime = orderTime;
        this.orderId = orderId;
        this.drinkPrice = drinkPrice;
        this.drinkNum = drinkNum;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getDrinkId() {
        return drinkId;
    }

    public void setDrinkId(String drinkId) {
        this.drinkId = drinkId;
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

    public double getDrinkPrice() {
        return drinkPrice;
    }

    public void setDrinkPrice(double drinkPrice) {
        this.drinkPrice = drinkPrice;
    }

    public int getDrinkNum() {
        return drinkNum;
    }

    public void setDrinkNum(int drinkNum) {
        this.drinkNum = drinkNum;
    }
}
