package com.demo01.demo.entity;


public class User {
    private String username;
    private String pwd;
    private String phone;

    public User(String username, String pwd, String phone, String gender, String birthday, int level) {
        this.username = username;
        this.pwd = pwd;
        this.phone = phone;
        this.gender = gender;
        this.birthday = birthday;
        this.level = level;
    }

    public User(String username, String phone, String gender, String birthday) {
        this.username = username;
        this.phone = phone;
        this.gender = gender;
        this.birthday = birthday;
    }

    public User(String pwd, String phone) {
        this.pwd = pwd;
        this.phone = phone;
    }

    private String gender;
    private String birthday;
    private int level;

    public User() {
    }

    public String getGender() {
        return gender;
    }

    public String getUsername() {
        return username;
    }

    public String getPwd() {
        return pwd;
    }

    public String getPhone() {
        return phone;
    }

    public String getBirthday() {
        return birthday;
    }

    public int getLevel() {
        return level;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }
}
