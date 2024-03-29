package com.service;

import java.util.List;

import com.dto.OrdersDTO;

public interface OrdersService {

	public OrdersDTO addOrders(int custid);

	public String deleteOrders(int orderId);

	public OrdersDTO getById(int id);

	public List<OrdersDTO> findAl();

	public List<OrdersDTO> getOrderCustomerId(int customerId);
}
