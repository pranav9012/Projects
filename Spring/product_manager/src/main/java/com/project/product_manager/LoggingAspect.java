package com.project.product_manager;

import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class LoggingAspect {

    private static final Logger LOGGER = LoggerFactory.getLogger(LoggingAspect.class);
    @Before("execution(public * com.project.product_manager.ProductController.getProducts())")
    private void logBefore(){
        LOGGER.info("get all products called from aspect before");
    }

    @AfterReturning("execution(public * com.project.product_manager.ProductController.getProducts())")
    private void logAfter(){
        LOGGER.info("get all products executed");
    }

    @AfterThrowing("execution(public * com.project.product_manager.ProductController.getProducts())")
    private void logException(){
        LOGGER.error("Failed to execute command");
    }
}
}
