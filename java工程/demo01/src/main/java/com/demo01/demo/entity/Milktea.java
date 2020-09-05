package com.demo01.demo.entity;

public class Milktea {
    String id;
    String name;
    String des;
    String price;
    String type;
    String type_name;

    public Milktea(String id, String name, String des, String price, String type, String type_name) {
        this.id = id;
        this.name = name;
        this.des = des;
        this.price = price;
        this.type = type;
        this.type_name = type_name;
    }

    public String getType_name() {
        return type_name;
    }

    public void setType_name(String type_name) {
        this.type_name = type_name;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDes() {
        return des;
    }

    public void setDes(String des) {
        this.des = des;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
