import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-test-grid',
    templateUrl: './test-grid.component.html',
    styleUrls: ['./test-grid.component.scss']
})
export class TestGridComponent implements OnInit {
    dataSource: {text: string, userId: number, note: string}[] = [];
    textSource: {id: number, name: string}[] = [];
    temp: string;

    constructor() {
    }

    ngOnInit() {
        this.dataSource = [
            {text: 'Loc - 1', userId: 12, note: ''},
            {text: 'Hung - 2', userId: 13, note: ''},
            {text: 'Tai - 3', userId: 14, note: ''},
        ];
        this.textSource = [
            {id: 1, name: 'Loc'},
            {id: 2, name: 'Hung'}
        ];
    }

    onIdChanged(cell: any, e: any) {
        const user = this.textSource.find(_ => _.id === e.value);
        const text = `${user.name} - ${user.id}`;

        this.temp = text;
        cell.component.cellValue(cell.rowIndex, 'text', text);
        cell.component.cellValue(cell.rowIndex, 'note', text);
    }

    onPreparing(e: any) {
        console.log(e);
        this.temp = e.row.data.text;
    }
}
