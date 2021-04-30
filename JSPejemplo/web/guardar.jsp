<%-- 
    Document   : guardar
    Created on : 29/04/2021, 05:25:51 PM
    Author     : Studio
--%>

<%@page import="java.sql.DriverManager"%>
<%@page contentType="text/html" pageEncoding="UTF-8"% language="java" import="java.sql.^, java.util">
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <%
        //aquí ya´puedo incorporar código java
        Conection con = null;
        Statement set = null;
        ResultSet rs = null;
        
        String url, userName, password, driver;
        
        url = "jdbc:mysql://localhost/registro";
        userName = "root";
        password = "04022004";
        
        driver = "com.mysql.jdbc.Driver";
        
        try{
            Class.forName(driver);
            con = DriverManager.getConnection(url, userName, password);
            //diferentes vistas para los errores
            //error esclusivo de sql
            try{
                
            }
        }        
        <h1>Registro exitoso</h1>
    </body>
</html>
