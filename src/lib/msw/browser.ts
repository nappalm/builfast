 
import { setupWorker } from 'msw/browser';
import handlers from './browserHandlers';

export const worker = setupWorker(...handlers);

export async function enableMocking() {
  if (import.meta.env.PROD) return;
  return worker.start({
    onUnhandledRequest(req, print) {
      if (!req.url.includes('/')) {
        print.warning();
      }
    },
  });
}
