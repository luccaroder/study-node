import superTest from 'supertest';
import chai from 'chai';
import setupApp from '../../src/app';


global.setupApp = setupApp;
global.superTest = superTest;
global.expect =chai.expect;