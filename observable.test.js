import { Observable } from "./observable";

describe("Observable", () => {
    test('Observable subscriptions next returns value in pipe', () => {
        let test_value = "testing"

        let fakeAsyncData$ = new Observable(observer => {
            observer.next(test_value);
        });

        fakeAsyncData$.subscribe({
            next(val) { expect(val).toBe(test_value) }
        });
    });
});