package com.demo01.demo.mappers;

import com.demo01.demo.entity.MiniOrder;
import com.demo01.demo.entity.MiniOrderEntry;
import com.demo01.demo.entity.Order;
import com.demo01.demo.entity.OrderEntry;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface OrderMapper {
    public List<OrderEntry> findAllOrderByName(String userName);
    public List<MiniOrderEntry> findAllMiniOrder(String userName);
    public List<OrderEntry> findOneOrder(String userName, int orderId);
    public List<MiniOrderEntry> findTodayMiniOrder(String userName);
    public int addOneOrder(OrderEntry orderEntry);
    public int findLastOrderId();
    public int findLastPickId();
}
