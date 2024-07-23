package com.codingShot;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class AddServ extends HttpServlet {
	
//	public void service(HttpServletRequest req, HttpServletResponse res) throws IOException {
//		//function override cannot change method name
//		
//		int i = Integer.parseInt(req.getParameter("num1"));
//		int j = Integer.parseInt(req.getParameter("num2"));
//		int k = i + j;
//		PrintWriter out =  res.getWriter();
//		out.println("Addition is: " + k);
//	}
	
//	public void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException {
//		//function override cannot change method name
//		//works only with post request
//		// Query Parameters are hidden in post. useful for when sending password and username
//		
//		int i = Integer.parseInt(req.getParameter("num1"));
//		int j = Integer.parseInt(req.getParameter("num2"));
//		int k = i + j;
//		PrintWriter out =  res.getWriter();
//		out.println("Addition is: " + k);
//	}
	
	public void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
		//function override cannot change method name
		//works only with get request
		//Query Parameters are visible.
		
		int i = Integer.parseInt(req.getParameter("num1"));
		int j = Integer.parseInt(req.getParameter("num2"));
		int k = i + j;

		// Session Management - to send data from one servlet to another
		req.setAttribute("valueToSqr", k);
		
		
		// Request dispatcher and redirect
		RequestDispatcher rd = req.getRequestDispatcher("sqr");
		rd.forward(req, res);
	}
}
