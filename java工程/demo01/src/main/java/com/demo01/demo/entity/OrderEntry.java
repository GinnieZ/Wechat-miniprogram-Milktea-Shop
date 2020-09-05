package com.demo01.demo.entity;

import java.sql.Timestamp;
import java.util.List;

public class OrderEntry {
    private String userName;
    private String drinkId;
    private String drinkName;
    private int drinkNum;
    private String drinkInfo;
    private double drinkPrice;
    private Timestamp orderTime;
    private int orderId;
    private int pickId;
    public OrderEntry() {
    }

    public OrderEntry(String userName, String drinkId, String drinkName, int drinkNum, String drinkInfo, double drinkPrice, Timestamp orderTime, int orderId, int pickId) {
        this.userName = userName;
        this.drinkId = drinkId;
        this.drinkName = drinkName;
        this.drinkNum = drinkNum;
        this.drinkInfo = drinkInfo;
        this.drinkPrice = drinkPrice;
        this.orderTime = orderTime;
        this.orderId = orderId;
        this.pickId = pickId;
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

    public String getDrinkName() {
        return drinkName;
    }

    public void setDrinkName(String drinkName) {
        this.drinkName = drinkName;
    }

    public int getDrinkNum() {
        return drinkNum;
    }

    public void setDrinkNum(int drinkNum) {
        this.drinkNum = drinkNum;
    }

    public String getDrinkInfo() {
        return drinkInfo;
    }

    public void setDrinkInfo(String drinkInfo) {
        this.drinkInfo = drinkInfo;
    }

    public double getDrinkPrice() {
        return drinkPrice;
    }

    public void setDrinkPrice(double drinkPrice) {
        this.drinkPrice = drinkPrice;
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

    public int getPickId() {
        return pickId;
    }

    public void setPickId(int pickId) {
        this.pickId = pickId;
    }
}
