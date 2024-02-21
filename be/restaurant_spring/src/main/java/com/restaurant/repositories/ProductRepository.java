package com.restaurant.repositories;

import com.restaurant.dtos.ProductDto;
import com.restaurant.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    List<ProductDto> findAllByCategoryId(Long categoryId);
}
