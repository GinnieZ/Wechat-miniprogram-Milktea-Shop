package com.demo01.demo.entity;

import java.sql.Timestamp;
import java.util.List;

public class Order {
    private String userName;
    private List<OrderDrink> drinkList;
    private Timestamp orderTime;
    private int orderId;
    private int pickId;
    private double totalPrice;

    public Order() {
    }

    public Order(String userName, List<OrderDrink> drinkList, Timestamp orderTime, int orderId, int pickId, double totalPrice) {
        this.userName = userName;
        this.drinkList = drinkList;
        this.orderTime = orderTime;
        this.orderId = orderId;
        this.pickId = pickId;
        this.totalPrice = totalPrice;
    }

    public Order(String userName, List<OrderDrink> drinkList, double totalPrice) {
        this.userName = userName;
        this.drinkList = drinkList;
        this.totalPrice = totalPrice;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public List<OrderDrink> getDrinkList() {
        return drinkList;
    }

    public void setDrinkList(List<OrderDrink> drinkList) {
        this.drinkList = drinkList;
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

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }
}
