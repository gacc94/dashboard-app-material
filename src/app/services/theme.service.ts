import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: "root"
})
export class ThemeService {

    isDarkTheme$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    getTheme() {
        this.isDarkTheme$.asObservable();
    }

    setTheme(isDark: boolean) {
        this.isDarkTheme$.next(isDark);
    }

}