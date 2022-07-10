import { Provide } from '@midwayjs/decorator';
import { CoolController, BaseController } from '@cool-midway/core';
import { ContractProceedsEntity } from '../../../entity/contract/proceed';
import { ContractService } from '../../../service/contract';

/**
 * 合同
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: ContractProceedsEntity,
  service: ContractService,
  insertParam() {
    return {
      proceedId: 0
    };
  }
})
export class ContractProceedsController extends BaseController {}
