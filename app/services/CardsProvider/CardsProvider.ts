/**
 * Created by vlad on 12.10.17.
 */
import {Card} from './Card';
import {Injectable} from '@angular/core'

@Injectable()
export class CardsProvider {

    getData() {
        let data = [
            {'first': 'Alex', 'last': 'Molchanov'},
            {'first': 'Alex', 'last': 'Schedrov'},
            {'first': 'Alex', 'last': 'Ivanov'},
            {'first': 'Alex', 'last': 'Kuznecov'},
        ];
        return data;
    }

}