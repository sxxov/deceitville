import rock_x18_bin from './rock-x18.bin?url';

export default {
	"asset": {
		"generator": "Khronos glTF Blender I/O v3.6.27",
		"version": "2.0"
	},
	"extensionsUsed": [
		"KHR_draco_mesh_compression",
		"KHR_materials_transmission",
		"KHR_materials_ior"
	],
	"extensionsRequired": [
		"KHR_draco_mesh_compression"
	],
	"scene": 0,
	"scenes": [
		{
			"name": "Scene",
			"nodes": [
				0
			]
		}
	],
	"nodes": [
		{
			"mesh": 0,
			"name": "rock.019",
			"rotation": [
				-0.5061636567115784,
				0.6844961047172546,
				0.4722939431667328,
				0.22847726941108704
			],
			"translation": [
				-0.5135778784751892,
				0.32412612438201904,
				-0.34446656703948975
			]
		}
	],
	"materials": [
		{
			"doubleSided": true,
			"extensions": {
				"KHR_materials_transmission": {
					"transmissionFactor": 1
				},
				"KHR_materials_ior": {
					"ior": 1.4500000476837158
				}
			},
			"name": "Material.001",
			"pbrMetallicRoughness": {
				"baseColorFactor": [
					0.8394935727119446,
					0.8394935727119446,
					0.8394935727119446,
					1
				],
				"metallicFactor": 0.921450138092041,
				"roughnessFactor": 0.17824772000312805
			}
		}
	],
	"meshes": [
		{
			"name": "rock.019",
			"primitives": [
				{
					"attributes": {
						"POSITION": 0,
						"NORMAL": 1,
						"TEXCOORD_0": 2
					},
					"extensions": {
						"KHR_draco_mesh_compression": {
							"bufferView": 0,
							"attributes": {
								"POSITION": 0,
								"NORMAL": 1,
								"TEXCOORD_0": 2
							}
						}
					},
					"indices": 3,
					"material": 0,
					"mode": 4
				}
			]
		}
	],
	"accessors": [
		{
			"componentType": 5126,
			"count": 195,
			"max": [
				0.4952804446220398,
				0.6397535800933838,
				0.4595147967338562
			],
			"min": [
				-0.3244441747665405,
				-0.7689335942268372,
				-0.37704184651374817
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 195,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 195,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 576,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 2077,
			"byteOffset": 0
		}
	],
	"buffers": [
		{
			"byteLength": 2080,
			"uri": rock_x18_bin
		}
	]
}