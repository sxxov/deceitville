import rock_x35_bin from './rock-x35.bin?url';

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
			"name": "rock.062",
			"rotation": [
				-0.543680727481842,
				-0.726671040058136,
				-0.3557341396808624,
				0.2231898456811905
			],
			"translation": [
				-1.2643948793411255,
				2.376145124435425,
				-3.494762897491455
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
			"name": "rock.030",
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
			"count": 153,
			"max": [
				0.3779953718185425,
				0.5801180005073547,
				0.40596839785575867
			],
			"min": [
				-0.377673864364624,
				-0.6308938264846802,
				-0.38308438658714294
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 153,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 153,
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
			"byteLength": 1622,
			"byteOffset": 0
		}
	],
	"buffers": [
		{
			"byteLength": 1624,
			"uri": rock_x35_bin
		}
	]
}