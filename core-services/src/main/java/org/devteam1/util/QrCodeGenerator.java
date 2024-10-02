package org.devteam1.util;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.EncodeHintType;
import com.google.zxing.WriterException;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;

import javax.swing.*;
import java.awt.*;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class QrCodeGenerator extends JFrame {

    // Constructor to set up the JFrame
    public QrCodeGenerator(final String url) {
        setTitle("QR Code Generator");
        setSize(400, 400);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null); // Center the window

        // Create QR Code and display it in the JFrame
        try {
            // Generate QR code image
            final Image qrCodeImage = generateQRCodeImage(url, 300, 300);
            final JLabel qrCodeLabel = new JLabel(new ImageIcon(qrCodeImage));
            add(qrCodeLabel, BorderLayout.CENTER);
        } catch (WriterException | IOException e) {
            e.printStackTrace();
        }

        setVisible(true);
    }

    // Function to generate QR Code as an Image
    public Image generateQRCodeImage(final String text, final int width, final int height)
            throws WriterException, IOException {
        final QRCodeWriter qrCodeWriter = new QRCodeWriter();

        // Set encoding hints
        final Map<EncodeHintType, Object> hintMap = new HashMap<>();
        hintMap.put(EncodeHintType.CHARACTER_SET, "UTF-8");

        // Generate QR code as BitMatrix
        final BitMatrix bitMatrix = qrCodeWriter.encode(text, BarcodeFormat.QR_CODE, width, height, hintMap);

        // Convert BitMatrix to BufferedImage
        return MatrixToImageWriter.toBufferedImage(bitMatrix);
    }
}

