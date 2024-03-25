package com.fyp.gemzonProject.Util;

	import org.modelmapper.Conditions;
	import org.modelmapper.ModelMapper;

	public class MapperUtils {

		public static ModelMapper getModelMapper() {

			ModelMapper modelMapper = new ModelMapper();
			modelMapper.getConfiguration().setPropertyCondition(Conditions.isNotNull());
			return modelMapper;
		}

	}

