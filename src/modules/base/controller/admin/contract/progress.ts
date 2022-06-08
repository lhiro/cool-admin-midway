import { Provide } from '@midwayjs/decorator';
import { CoolController, BaseController } from '@cool-midway/core';
import { ContractProgressEntity } from '../../../entity/contract/progress';
import { ContractService } from '../../../service/contract';

/**
 * 合同
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: ContractProgressEntity,
  service: ContractService,
  insertParam() {
    return {
      declareId: 0,
      date: new Date(),
      informant: '测试',
    };
  }
})
export class ContractProgessController extends BaseController {}
