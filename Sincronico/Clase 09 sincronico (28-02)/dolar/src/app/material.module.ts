import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';


const mylistMaterialModules=[    
    MatButtonModule,
    MatCardModule,
    MatMenuModule,


];

@NgModule({


    imports:[...mylistMaterialModules],
    exports:[...mylistMaterialModules]
})
export class MaterialModule{}