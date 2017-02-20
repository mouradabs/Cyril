import { ipcRenderer } from 'electron';
import Services from '../../app/ui/services/Services.jsx';

describe('the services module', () => {
  it('getAccounts() sets up a simple callback for backend feedback', (done) => {
    Services.getAccounts(() => {
      done();
    });
  });
  
  it('addAccount() adds an account', () => {
    let expectedId = 'unit';
    let expectedName = 'test';
    Services.addAccount(expectedId, expectedName);
    expect(ipcRenderer.send).toHaveBeenCalledWith('add-account', {id: expectedId, name: expectedName});
  });
  
  it('addAccount() calls callback once it\'s finished, if supplied', (done) => {
    Services.addAccount('test', 'account', () => {
      done();
    });
  });
});