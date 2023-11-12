import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Injectable({
  providedIn: 'root'
})
export class PdfGeneratorService {

  constructor() { }

  generateInvoice(DocumentData: any) {
    const client_name = DocumentData.document_client.client_name
    const client_address = DocumentData.document_client.client_city
    const ICE = DocumentData.document_client.client_ICE
    const document_number = DocumentData.document_number
    const document_date = DocumentData.document_date
    const document_items = DocumentData.document_items
    let document_items_arry = []
    let document_Total = 0
    let document_TVA = 20
    let max_row_table = 20
    document_items.forEach(element => {
      document_items_arry.push([element.name, element.quantity, element.unity_total, element.total])
      document_Total = document_Total + element.total
    });
    console.log(document_items_arry.length)
    if (document_items_arry.length < max_row_table){
      let empty_rows = max_row_table - document_items_arry.length
      for (let index = 0; index < empty_rows; index++) {
        document_items_arry.push(['', "", "", ""])
      }
    }


    let document_TVAadd = document_Total * document_TVA/100
    let document_TotalTVA = document_TVAadd + document_Total

    const doc = new jsPDF();

    // Add background image
    const backgroundImage = new Image();
    backgroundImage.src = 'assets/img/invoice-bg.png'; // Keeping the image path unchanged

    backgroundImage.onload = () => {
      doc.addImage(
        backgroundImage,
        'JPEG',
        0,
        0,
        doc.internal.pageSize.getWidth(),
        doc.internal.pageSize.getHeight()
      );
      doc.setFont("Helvetica", "bold");

      // Move down to avoid overlapping with the header
      const headerHeight = 20; // Adjusted value based on your header height

      // Draw Billed to: rectangle
      const borderRadius = 2;
      const cellWidth = 60; // Adjusted width
      const cellHeight = 17; // Adjusted height
      const xBilledTo = 14;
      const yBilledTo = headerHeight + 20; // Use the current Y position after moving down

      doc.setFillColor(255, 172, 28); // Background color #FFAC1C
      doc.setTextColor(255, 255, 255); // Text color white
      doc.setDrawColor(255, 172, 28); // Border color black
      doc.setLineWidth(0.1); // Border width

      // Draw the rounded rectangle with adjusted padding and border radius for Billed to:
      doc.roundedRect(xBilledTo, yBilledTo, cellWidth, cellHeight, borderRadius, borderRadius, 'FD');

      // Set a smaller font size for the text
      doc.setFontSize(10);

      // Draw the text with adjusted padding for Billed to:
      const textXBilledTo = xBilledTo + 5; // Adjusted padding on the left
      const textYBilledTo = yBilledTo + 5; // Adjusted padding on the top
      doc.text('Billed to: ' + client_name, textXBilledTo, textYBilledTo);
      doc.text('Address : ' + client_address, textXBilledTo, textYBilledTo + 5);
      doc.text('ICE : ' + ICE, textXBilledTo, textYBilledTo + 10);

      // Draw Number: rectangle on the right side
      const xNumber = doc.internal.pageSize.getWidth() - 75; // Adjusted X position for Number:
      const yNumber = yBilledTo; // Same Y position as Billed to:

      doc.setFillColor(255, 172, 28); // Background color #FFAC1C
      doc.setTextColor(255, 255, 255); // Text color white
      doc.setDrawColor(255, 172, 28); // Border color black
      doc.setLineWidth(0.25); // Border width
      // Draw the rounded rectangle with adjusted padding and border radius for Number:
      doc.roundedRect(xNumber, yNumber, cellWidth, cellHeight, borderRadius, borderRadius, 'FD');

      // Draw the text with adjusted padding for Number:
      const textXNumber = xNumber + 5; // Adjusted padding on the left
      const textYNumber = yNumber + 5; // Adjusted padding on the top
      doc.text(`Number: ${document_number}`, textXNumber, textYNumber);
      doc.text(`Date: ${document_date}`, textXNumber, textYNumber + 5);

      // Reset font size for subsequent text
      doc.setFontSize(12);

      // Calculate startY based on the maximum Y position of the Billed to and Number rectangles
      const spaceBetween = 10; // Adjust the space between the rectangles and the table
      const startY = Math.max(yBilledTo, yNumber) + cellHeight + spaceBetween;

      // Calculate the remaining height for the invoice table considering the footer height
      const footerHeight = 10; // Adjusted value based on your footer height
      const availableHeight = doc.internal.pageSize.getHeight() - startY - footerHeight;

      // Draw the invoice table
      autoTable(doc, {
        startY,
        head: [['Items', 'Quantity', 'Price', 'Amount']],
        body: document_items_arry,
        theme: 'striped',
        headStyles: {
          fillColor: '#FFAC1C'
        }
      });
      autoTable(doc, {
        body: [
          [
            {
              content: 'HT :',
              styles: {
                halign: 'left'
              }
            },
            {
              content: document_Total,
              styles: {
                halign: 'right'
              }
            },
          ],
          [
            {
              content: 'TVA :',
              styles: {
                halign: 'left'
              }
            },
            {
              content: document_TVA,
              styles: {
                halign: 'right'
              }
            },
          ],
          [
            {
              content: 'TTC :',
              styles: {
                halign: 'left'
              }
            },
            {
              content: document_TVAadd,
              styles: {
                halign: 'right'
              }
            },
          ],
          [
            {
              content: 'Total :',
              styles: {
                halign: 'left'
              }
            },
            {
              content: document_TotalTVA,
              styles: {
                halign: 'right'
              }
            },
          ],
        ],
        theme: 'striped',
        styles: {
          cellWidth: 25, // Adjusted to 'wrap' to fit the content
          halign: 'right'    // Aligned to the right
        },
        margin: { top: 10, right: 10, bottom: 10, left: 146 },
      });
      // Save the PDF
      const pdfBlob = doc.output('blob');
      const pdfUrl = URL.createObjectURL(pdfBlob);
      window.open(pdfUrl, '_blank');
    };
  }
}
