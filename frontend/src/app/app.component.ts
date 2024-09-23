import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule
import { AprendicesService } from './aprendices.service'; // Importar el servicio

@Component({
  selector: 'app-root',
  standalone: true, // Asegurarse de que esté marcado como standalone
  imports: [HttpClientModule], // Importar HttpClientModule aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  aprendices: any[] = [];

  constructor(private aprendicesService: AprendicesService) {}

  ngOnInit() {
    this.aprendicesService.getAprendices().subscribe((data) => {
      this.aprendices = data;
    });
  }
}

