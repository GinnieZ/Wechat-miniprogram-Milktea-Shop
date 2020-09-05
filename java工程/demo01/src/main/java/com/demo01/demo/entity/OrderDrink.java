package com.demo01.demo.entity;

public class OrderDrink {
    private String drinkId;
    private String drinkName;
    private int drinkNum;
    private String drinkInfo;
    private double drinkPrice;

    public OrderDrink(String drinkId, String drinkName, int drinkNum, String drinkInfo, double drinkPrice) {
        this.drinkId = drinkId;
        this.drinkName = drinkName;
        this.drinkNum = drinkNum;
        this.drinkInfo = drinkInfo;
        this.drinkPrice = drinkPrice;
    }

    public OrderDrink() {
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
}
